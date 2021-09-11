class CalcController {

    constructor() {

        this._locale = 'pt-BR';
        this._diplayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();

    }

    initialize() {

        this.setDiplayDateTime();

        setInterval(() => {

            this.setDiplayDateTime();

        }, 1000);

    }

    setDiplayDateTime() {

        this.diplayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.diplayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get diplayTime() {
        return this._timeEl.innerHTML;
    }

    get diplayDate() {
        return this._dateEl.innerHTML;
    }

    set diplayTime(value) {
        this._timeEl.innerHTML = value;
    }

    set diplayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get displayCalc() {
        return this._diplayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._diplayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }

}