import { deleteTask } from "../helpers/deleteTask";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const Popup = ({ idTasks, tasks, setTasks, item }) => {
  useEffect(() => {
    // No es necesario llamar handleDelete aquí
  }, []);
  
  const handleDelete = (e) => {
    e.stopPropagation();

    const taskToDelete = tasks.find(task => task.id === idTasks);

    Swal.fire({
      title: `¿Estás seguro de eliminar: "${taskToDelete.tasks}"?`,
      text: "No podrás recuperar la tarea.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Eliminada`,
          text: `La tarea "${taskToDelete.tasks}" ha sido eliminada.`,
          icon: "success",
        }).then(() => {
          // Actualizar el estado después de cerrar la segunda alerta
          setTasks(deleteTask(tasks, idTasks));

        });
      }
    });
  };

  return (
    <div className='popup-delete bg-gray-600 p-2 rounded absolute right-0 top-[25px] w-[100px] z-10'>
      <p onClick={(e) => handleDelete(e)} className='whitespace-nowrap'>
        Eliminar
      </p>
    </div>
  );
};

export default Popup
