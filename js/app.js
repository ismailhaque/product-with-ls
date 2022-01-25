const order_form = document.querySelector(`#order_form`);
const counter = document.querySelector(`#counter`);

order_form.addEventListener('submit', function(e){
  e.preventDefault();

  let date = this.querySelector(`input[type="date"]`).value;
  let time = this.querySelector(`input[type="time"]`).value;

  let reload = setInterval(() => {

    let start_date = new Date();
    let end_date = new Date( date + ' ' + time );
  
    let time_diff = Math.floor((end_date.getTime() - start_date.getTime()) / 1000);
  
    let total_sec = time_diff;
    let total_min = Math.abs(Math.floor( total_sec / 60 ));
    let total_hour = Math.abs(Math.floor( total_min / 60 ));
    let total_day = Math.abs(Math.floor( total_hour / 24 ));

    let hours = total_hour - ( total_day * 24 );
    let mins = total_min - ( total_day * 24 * 60 ) - ( hours * 60 );
    let secs = total_sec - ( total_day * 24 * 60 * 60 ) - ( hours * 60 * 60 ) - ( mins * 60 );

    counter.innerHTML = `<p><span>Days</span><br><span id="day">${ total_day }</span></p>
    <p><span>Hours</span><br><span id="hour">${ hours }</span></p>
    <p><span>Minutes</span><br><span id="min">${ mins }</span></p>
    <p><span>Seconds</span><br><span id="sec">${ secs }</span></p>`;

    counter.classList.add('alert-primary')

    if ( total_day == '0' && hours == '0' && mins == '0' && secs == '0' ) {
      clearInterval(reload);
      counter.classList.add('alert-danger')
    }
    
  }, 1000);
  
})
