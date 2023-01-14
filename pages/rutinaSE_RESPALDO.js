import React, { useEffect, useState } from 'react';

import { useRouter } from "next/router";
import Navbar from './Componentes/Navbar';
import Footer from "./Componentes/Footer";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import shortid from 'shortid';

export default function Home() {
  //Variables generales
  const [seriesG, setSeriesG] = useState("5");
  const [repeticionesG, setRepeticionesG] = useState("12");
  const [descanso, setDescanso] = useState("3m");
  //Recuperar valores
  const router = useRouter();
  const { formData2, checkboxes, arreglo } = router.query;
  //JSON
  const formulario = JSON.parse(formData2);
  const herramientas = JSON.parse(checkboxes);
  const opciones = JSON.parse(arreglo);
  //contenidos de puede llegar a contener cada dia
  const contenido1 = [];//lUNES
  const contenido2 = [];//MARTES
  const contenido3 = [];//MIERCOLES
  const contenido4 = [];//JUEVES
  const contenido5 = [];//VIERNES
  const contenido6 = [];//SABADO


  //INICIO DEL SE
  


   //____________________________________________pregunta de objetivo
  if (opciones[1]==='masamuscular') {
    console.log("masamuscular");
  } else if (opciones[1]==='resistencia') {
    console.log("resistencia");
  } else if (opciones[1]==='fuerza') {
    console.log("fuerza");
  } else if (opciones[1]==='perdergrasa') {
    console.log("perdergrasa");
  }  else if (opciones[1]==='salud') {
    console.log("salud");
  } else {
    console.log("Error en el SE P:OBJETIVO");
  }

     //____________________________________________pregunta de experiencia
     if (opciones[2]==='principiante') {
      console.log("principiante");
    } else if (opciones[2]==='intermedio') {
      console.log("intermedio");
    } else if (opciones[2]==='avanzado') {
      console.log("avanzado");
    } else if (opciones[2]==='experimentado') {
      console.log("experimentado");
    } else {
      console.log("Error en el SE P:OBJETIVO");
    }


  //____________________________________________pregunta de tiempo
  if (opciones[2]==='30min') {
    console.log("30min");
  } else if (opciones[2]==='1hr') {
    console.log("1hr");
  } else if (opciones[2]==='1hr 30') {
    console.log("1hr 30");
  } else if (opciones[2]==='2hr') {
    console.log("2hr");
  } else {
    console.log("Error en el SE P:TIEMPO");
  }

  //____________________________________________pregunta de enfoque.
  if (opciones[4]==='superior') {
    //push pull leg
    console.log("1");
  } else if (opciones[4]==='brazos') {
    //pecho espalda brazo pierna
    console.log("2");
  } else if (opciones[4]==='pierna') {
    //pierna push pull intensidad
    console.log("3");
  } else if (opciones[4]==='completo') {
    //push pull leg intensidad equilibrada ejercicios compuestos
    console.log("4");
  } else {
    console.log("Error en el SE P:ENFOQUE");
  }


  //llenar temporal
  for (let i = 0; i < 5; i++) {
    contenido1.push({ valor: 1, series: seriesG, repeticiones: repeticionesG });
    contenido2.push({ valor: 1, series: seriesG - 1, repeticiones: repeticionesG });
    contenido3.push({ valor: 1, series: seriesG, repeticiones: repeticionesG });
    contenido4.push({ valor: 1, series: seriesG, repeticiones: repeticionesG });
    contenido5.push({ valor: 1, series: seriesG, repeticiones: repeticionesG });
    contenido6.push({ valor: 1, series: seriesG, repeticiones: repeticionesG });
  }











  //una vez lleno el contenido se une todo para mostrarlo en la tabla
  const arrays = [contenido1, contenido2, contenido3, contenido4, contenido5, contenido6];
  const longestArray = arrays.reduce((a, b) => (a.length > b.length ? a : b));

  const handleClick = () => {
    console.log(formulario);
    console.log("posicion 5" + opciones[4]);
    console.log(herramientas);
    console.log(opciones);
  };

  useEffect(() => {
    localStorage.removeItem("NombrePaquete");
    localStorage.removeItem("Meses");
  }, [])


  return (
    <div className="bg-blue-100 w-full h-screen">
      <Head>
        <title>EvoltFit - Sistema Experto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <br /><br />

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Lunes</th>
                <th className="px-6 py-3">Martes</th>
                <th className="px-6 py-3">Miércoles</th>
                <th className="px-6 py-3">Jueves</th>
                <th className="px-6 py-3">Viernes</th>
                <th className="px-6 py-3">Sábado</th>
                <th className="px-6 py-3">Domingo</th>
              </tr>
            </thead>
            <tbody>
              {longestArray.map((_, index) => (
                <tr key={`${arrays[index]}-${index}`} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  {arrays.map((array) => (

                    <td key={shortid.generate()} className="px-6 py-4">
                      {index < array.length ?
                        <p>
                          {array[index].valor} <br />
                          <img src="img/completo2.png" alt='hola' key={array[index]} style={{ width: '50px', height: '50px' }}></img>
                          <br />{array[index].series}x{array[index].repeticiones} <br />
                          Descanso: {descanso}
                        </p>
                        : ''} <br />
                    </td>

                  ))}
                  <td key={index} className="px-6 py-4"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <button onClick={handleClick} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">ver Datos</button>
        <br /><br /> <br /> <br /> <br /> <br /> <br />
      </main>
      <Footer></Footer>
    </div>
  );
}