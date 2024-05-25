import React, { useState, useEffect } from 'react';
import './calendario.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch('../assets/eventos.json')
      .then(response => response.json())
      .then(data => setEventos(data))
      .catch(error => console.error('Error cargando eventos:', error));
  }, []);

  const cambiarMes = (increment) => {
    setDate(new Date(date.getFullYear(), date.getMonth() + increment, 1));
  };

  const obtenerNombreMes = (month) => {
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return meses[month];
  };

  const diasConEventos = eventos
    .filter(evento => new Date(evento.fecha).getMonth() === date.getMonth() && new Date(evento.fecha).getFullYear() === date.getFullYear())
    .map(evento => new Date(evento.fecha).getDate());

  const diasDelMes = [];
  const primerDiaDelMes = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const diasEnMes = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  for (let i = 0; i < primerDiaDelMes; i++) {
    diasDelMes.push(<div key={`empty-${i}`} className="day empty"></div>);
  }

  for (let i = 1; i <= diasEnMes; i++) {
    const tieneEvento = diasConEventos.includes(i);
    const esHoy = i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear();
    diasDelMes.push(
      <div key={i} className={`day ${tieneEvento ? 'with-event' : ''} ${esHoy ? 'today' : ''}`}>
        {i}
      </div>
    );
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => cambiarMes(-1)}>&lt;</button>
        <h2>{obtenerNombreMes(date.getMonth())} de {date.getFullYear()}</h2>
        <button onClick={() => cambiarMes(1)}>&gt;</button>
      </div>
      <div className="weekdays">
        <div>D</div>
        <div>L</div>
        <div>M</div>
        <div>M</div>
        <div>J</div>
        <div>V</div>
        <div>S</div>
      </div>
      <div className="days">
        {diasDelMes.map((dia, index) => (
          <div key={index} className="day-container">
            {dia}
          </div>
        ))}
      </div>
      <div className="eventos-lista">
        {eventos
          .filter(evento => new Date(evento.fecha).getMonth() === date.getMonth() && new Date(evento.fecha).getFullYear() === date.getFullYear())
          .map((evento, index) => (
            <div key={index} className="evento">
              <div>{new Date(evento.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: 'long' })}</div>
              <div>{evento.nombre}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Calendar;