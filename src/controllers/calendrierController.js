import { Calendar } from 'fullcalendar'

export default {
    "func" : 
        document.addEventListener('DOMContentLoaded', function () {
            const calendarEl = document.getElementById('calendar');
            const calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth'
            })
            calendar.render()
        })
}


//on ajoute un listener sur l'event DOMContentLoaded qui représente le 
// calendrier.(Pourquoi DOMCotentLoaded et pas calendar?). On lui relie 
