$(() => {

let getTable;
    $(".available").on("click", (test) => {
    $("#container").css("display", "none");
    $("#hiddenForm").css("display", "block");
       // $("#hiddenForm").css("display", "show");

   // let getTable;
     // $(".available").on("click", reserveTable);
     $("#btnSave").on("click", saveTable);
     $("#btnClose").on("click", close;

     function reserveTable() {
       if ($(this).hasClass('reserved')) {
           return;
       }
       else {
         let headCount = $(this).text();
         getTable = $(this);
         console.log(getTable);
         $("#container").css("display", "none");
         $("#hiddenForm").css("display", "block");
         $("#table-number").text(headCount);
       }
   }


       function saveTable() {
          getTable.removeClass("available");
          getTable.addClass("reserved");
          $("#container").css("display", "block");
          $("#hiddenForm").css("display", "none");

        }

        function close() {
            $("#container").css("display", "block");
            $("#hiddenForm").css("display", "none");
        }


    });
 });
