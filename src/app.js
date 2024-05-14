var Atlagsebessseg = /** @class */ (function () {
    function Atlagsebessseg() {
        this.startBind();
        this.eventHandler();
    }
    Atlagsebessseg.prototype.startBind = function () {
        this.utInput = document.querySelector('#ut');
        this.idoInput = document.querySelector('#ido');
        this.atlagInput = document.querySelector('#atlag');
        this.szamitGomb = document.querySelector('#szamitGomb');
    };
    Atlagsebessseg.prototype.eventHandler = function () {
        var _this = this;
        var _a;
        (_a = this.szamitGomb) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.onClickCalcButton();
        });
    };
    Atlagsebessseg.prototype.onClickCalcButton = function () {
        console.log('müködik');
        if (this.utInput && this.idoInput) {
            var ut = Number(this.utInput.value);
            var ido = Number(this.idoInput.value);
            this.atlag = this.calcAverageSpeed(ut, ido);
            this.renderResult();
        }
    };
    Atlagsebessseg.prototype.calcAverageSpeed = function (path, time) {
        return path / time;
    };
    Atlagsebessseg.prototype.renderResult = function () {
        if (this.atlagInput) {
            this.atlagInput.value = String(this.atlag);
        }
    };
    return Atlagsebessseg;
}());
new Atlagsebessseg();
