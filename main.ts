basic.forever(function () {
    if (CruiseE.sensorDistance(CruiseE.PingUnit.Centimeters) < 15 && CruiseE.sensorDistance(CruiseE.PingUnit.Centimeters) > 0) {
        CruiseE.motorRunComplex(CruiseE.MotorList.left, CruiseE.MotorDirection.forward, 800)
        CruiseE.motorRunComplex(CruiseE.MotorList.right, CruiseE.MotorDirection.forward, 0)
        basic.pause(500)
    } else {
        CruiseE.motorRunComplex(CruiseE.MotorList.all, CruiseE.MotorDirection.forward, 800)
    }
})
