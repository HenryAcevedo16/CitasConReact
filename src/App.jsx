import { useState, useEffect } from "react"
import Header from "./Components/Header"
import Formulario from "./Components/Formulario"
import ListadoPacientes from "./Components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState ({})

  useEffect(() =>{
    //UseEffect para mantener y traer datos de local Storage
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, [])

  useEffect(()=>{
    //UseEffect para subir datos a local storage
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  },[pacientes])


  const eliminarPaciente = id =>{
   const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
   setPacientes(pacientesActualizados)

  }


  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
      <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente= {eliminarPaciente}/>
        
      </div>
    </div>
  )
}

export default App
