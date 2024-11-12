// scroll onclick function byt-ticket
document.getElementById('btn-byeTicket').onclick = function () {
    const div = document.getElementById('scrollableDiv');
    div.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const allSeats = document.getElementsByClassName('seat');
for (const seat of allSeats) {
    seat.addEventListener('click', function (event) {

        // set bg color 
        seat.classList.add('bg-green-600');


        // left seats
        const leftSeat = document.getElementById('left-seat');
        let leftSeatValue = parseInt(leftSeat.innerText);
        leftSeatValue -= 1;
        leftSeat.innerText = leftSeatValue;


        // total seats 
        const totalSeat = document.getElementById('total-seat');
        let totalSeatValue = parseInt(totalSeat.innerText);
        totalSeatValue += 1;
        totalSeat.innerText = totalSeatValue;


        // append child 
        const append = document.getElementById('append');
        const li = document.createElement('li');
        li.style.display = 'flex'; // Use flexbox for the list item

        // Create spans for each part
        const seatSpan = document.createElement('span');
        seatSpan.innerText = seat.innerText;

        const classSpan = document.createElement('span');
        classSpan.innerText = 'Economy';

        const priceSpan = document.createElement('span');
        priceSpan.innerText = '550';

        // Append spans to the list item
        li.appendChild(seatSpan);
        li.appendChild(classSpan);
        li.appendChild(priceSpan);

        // Add gap between spans using CSS
        li.style.gap = '150px'; // Adjust the gap as needed

        // Append the list item to the parent
        append.appendChild(li);


        // total BDT 
        const total = document.getElementById('total-price');
        const totalBdtValue = parseInt(total.innerText);
        const totalBdt = totalBdtValue + 550;
        total.innerText = totalBdt;
    })
}