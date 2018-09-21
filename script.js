(function () {
    "use strict";
    window.onload = function () {
        //Add event listener here!	
        var button = document.getElementById('btn');
        button.addEventListener('click', AddRow);

        function AddRow() {
            var list = document.getElementById("list");
            var row = document.createElement("tr");
            var cell = document.createElement("td");
            var text = document.createTextNode("added");
            
            var name = document.getElementById("name").value;
            var price = document.getElementById("price").value;
            
            
            
            cell.appendChild(text);
            row.appendChild(cell);
            list.appendChild(row);
            
            CreateInnerHTML(name, price, row);
           
        }
        
        function CreateInnerHTML(name, price, row) {
            
            var cell2 = document.createElement("td");
            var cell3 = document.createElement("td");

            var text2 = document.createTextNode(name);
            var text3 = document.createTextNode(price);

            cell2.appendChild(text2);
            row.appendChild(cell2);
            list.appendChild(row);

            cell3.appendChild(text3);
            row.appendChild(cell3);
            list.appendChild(row);
            
        }
        
        function UpdateTotal (totalCost) {
            
            var totalT = parseFloat(totalCost);
            return ("$" + totalT);
            
            
        }



       







        /* WORKING CODE BEFORE ABSTRACTION START
                function AddRow() {

                    var list = document.getElementById("list");
                    var row = document.createElement("tr");
                    
                    var cell = document.createElement("td");
                    var cell2 = document.createElement("td");
                    var cell3 = document.createElement("td");

                    var name = document.getElementById("name").value;
                    var price = document.getElementById("price").value;

                    var text = document.createTextNode("added");
                    var text2 = document.createTextNode(name);
                    var text3 = document.createTextNode(price);

                    cell.appendChild(text);
                    row.appendChild(cell);
                    list.appendChild(row);

                    cell2.appendChild(text2);
                    row.appendChild(cell2);
                    list.appendChild(row);

                    cell3.appendChild(text3);
                    row.appendChild(cell3);
                    list.appendChild(row);
        WORKING CODE BEFORE ABSTRACTION END */

    };
}());