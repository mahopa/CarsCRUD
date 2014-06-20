var CarsApp = {};
CarsApp.cars = [];

CarsApp.Car = function (amodel, year) {
    this.model = amodel;
    this.year = year;
};

CarsApp.DrawTable = function () {
    var table = "<table class='table table-hover'>";
    for (var c in CarsApp.cars) {
        table += "<tr>"

        for (var p in CarsApp.cars[c]) {

            table += "<td>";
            table += CarsApp.cars[c][p];
            table += "</td>";
        }
        table += "<td><div class=\"btn btn-warning\" \
        onclick = 'CarsApp.ShowEditCar("+ c + ")' ><i class='fa fa-pencil'></i></div></td>";
        table += "</tr>";
        //table += CarsApp.cars[c].model;
        //table += "</td><td>";
        //table += CarsApp.cars[c].year;
        //table += "</td></tr>"
    }
    table += "</table>";
    document.getElementById("cars-table").innerHTML = table;
};
CarsApp.CreateCar = function () {
    var model = document.getElementById("model").value;
    var year = document.getElementById("year").value;
    CarsApp.cars.unshift(new CarsApp.Car(model, year));
    document.getElementById("year").value = "";
    document.getElementById("model").value = "";
    CarsApp.DrawTable();
};
CarsApp.DeleteCar = function () {
    var x = document.getElementById("index-edit").value;
    CarsApp.cars.splice(x, 1);
    CarsApp.DrawTable();
    $("#edit-modal").modal('hide');
};
CarsApp.ShowEditCar = function (carIndex) {
    var selectedCar = CarsApp.cars[carIndex];
    document.getElementById("model-edit").value = selectedCar.model;
    document.getElementById("year-edit").value = selectedCar.year;
    document.getElementById("index-edit").value = carIndex;
    $("#edit-modal").modal();
};
CarsApp.SaveEditCar = function () {
    "use strict";
    var carIndex, model, year;
    //var selectedCar = {};
    carIndex = document.getElementById("index-edit").value;
    CarsApp.cars[carIndex].model = document.getElementById("model-edit").value;
    CarsApp.cars[carIndex].year = document.getElementById("year-edit").value;
   
  //  CarsApp.cars[carIndex] = new CarsApp.Car(model, year);
    CarsApp.DrawTable();
    $("#edit-modal").modal('hide');

};
CarsApp.Seed = function () {

    CarsApp.cars.push(new CarsApp.Car("Ford", "2000"));
    CarsApp.cars.push(new CarsApp.Car("Scion", "2001"));
    CarsApp.cars.push(new CarsApp.Car("Pinto", "1995"));
    CarsApp.cars.push(new CarsApp.Car("Tesla", "2099"));
    CarsApp.DrawTable();
};
CarsApp.Seed();

