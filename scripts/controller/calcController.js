class CalcController {

    constructor() {

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');

        this._currentDate;

        this.initialize();
        this.initButtonsEvents();

    }

    initialize() {

        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime();

        }, 1000);

    }

    addEventListenerAll(element, events, func) {

        events.split(' ').forEach(event => {

            element.addEventListener(event, func, false);

        });

    }

    initButtonsEvents() {

        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, 'click frag', x => {

                console.log(btn.className.baseVal.replace('btn-', ''));

            });


            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', x => {

                btn.style.cursor = "pointer";

            });

        });

    }

    setDisplayDateTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get displayCalc() {

        return this.displayCalcEl.innerHTML;

    }

    set displayCalc(value) {

        this.displayCalcEl.innerHTML = value;

    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }

}