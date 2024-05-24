import React, { useState } from 'react';
import './calendario.css'; // Estilos del calendario, puedes personalizarlos según tus necesidades

const Calendar = ({ eventos }) => {
  // Obtener los días con eventos
  const diasConEventos = eventos.map(evento => new Date(evento.fecha).getDate());

  // Crear una matriz para representar el calendario del mes actual
  const diasDelMes = [];
  const diasEnSemana = 7; // Número de días en una semana
  const primerDiaDelMes = new Date().getDay(); // Obtener el día de la semana del primer día del mes
  const diasEnMes = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(); // Obtener el número de días en el mes actual

  // Llenar los días anteriores al primer día del mes
  for (let i = 0; i < primerDiaDelMes; i++) {
    diasDelMes.push('');
  }

  // Llenar los días del mes con sus números y marcar los días con eventos
  for (let i = 1; i <= diasEnMes; i++) {
    const tieneEvento = diasConEventos.includes(i);
    diasDelMes.push(
      <div key={i} className={tieneEvento ? 'day with-event' : 'day'}>
        {i}
      </div>
    );
  }

  return (
    <div className="calendar">
      <div className="weekdays">
        <div>Domingo</div>
        <div>Lunes</div>
        <div>Martes</div>
        <div>Miércoles</div>
        <div>Jueves</div>
        <div>Viernes</div>
        <div>Sábado</div>
      </div>
      <div className="days">
        {diasDelMes.map((dia, index) => (
          <div key={index} className="day-container">
            {dia}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;