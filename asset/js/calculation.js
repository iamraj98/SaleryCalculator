function getResult(){
    let emp_name = document.getElementById('empname').value;
    let emp_id = document.getElementById('empid').value;
    let emp_salery = document.getElementById('e-salery').value;
    let emp_tds =document.getElementById('e-tds').value;
    let emp_leaves = document.getElementById('e-leave').value;
    let emp_months = document.getElementById('month').value;
    let emp_years = document.getElementById('e-year').value;
    let emp_bonus = document.getElementById('e-bonus').value;
//    salery yearly
   let year_salery = emp_salery *12; 
    document.getElementById('r-yearly_salery').innerHTML= year_salery.toFixed(0);
    // show data

    // document.getElementById('r-ename').innerHTML = emp_name;
    // document.getElementById('r-eid').innerHTML = emp_id;
    // document.getElementById('r-esalery').innerHTML = emp_salery;
    // document.getElementById('r-etds').innerHTML = emp_tds;
    // document.getElementById('r-leave').innerHTML = emp_leaves;
    // document.getElementById('r-date').innerHTML = emp_months + "/" + emp_years;
    // document.getElementById('r-bonus').innerHTML = emp_bonus;







    // ERRor

            document.getElementById('r-ename').innerHTML = emp_name;
            // document.getElementById('r-eid').innerHTML = emp_id;
            document.getElementById('r-esalery').innerHTML = emp_salery;
            // document.getElementById('r-etds').innerHTML = emp_tds;
            // document.getElementById('r-leaves').innerHTML = emp_leaves;
            
            // document.getElementById('r-bonus').innerHTML = emp_bonus;
    

    

     if(emp_name == ""){
        alert("Please fill the name");
    }
    else if(emp_id == ""){
        alert("Please fill the id");
    }
    else if(emp_salery == ""){
        alert("Please fill the salery");
    }
    else if(emp_tds ==""){
        alert("Please fill the tds");
        return false;
    }
    else if(emp_leaves == ""){
        alert("Please fill the leaves");
    }
    else if(emp_months == "none"){
        alert("Please fill the months");
    }
    else if(emp_years == ""){
        alert("Please fill the years");
    }
    else if(emp_bonus=='' ){
            alert("Entering  bonus is mandatory  (The bonus can be 0 )")
        }
    else if (emp_years == ''){
        alert("Please fill years");
    }
    else if(emp_months=='January' || emp_months=='March' || emp_months=='May' || emp_months=='July'|| emp_months=='August' || emp_months=='October' || emp_months=='December'){
        let emp_salery = parseInt (document.getElementById('e-salery').value);
        let emp_years = parseInt(document.getElementById('e-year').value);
        let emp_bonus = parseInt(document.getElementById('e-bonus').value);
        let emp_tds =parseInt (document.getElementById('e-tds').value);
        let emp_leaves = parseInt(document.getElementById('e-leave').value);
        ddto = emp_salery / 31;
        // document.getElementById('perday').innerHTML = ddto;
        document.getElementById('r-month').innerHTML = emp_months;
        document.getElementById('r-year').innerHTML = emp_years;
        leave_cut = ddto * emp_leaves;
        leave_cut = leave_cut.toFixed(2) ;
        document.getElementById('r-leaves').innerHTML = emp_leaves;
        document.getElementById('r-rupee').innerHTML = "Rs."+  leave_cut+ "(-)"; 
        let tds_cut = (emp_salery*emp_tds)/100;
        document.getElementById('r-etds').innerHTML = emp_tds + "%";
        document.getElementById('r-value').innerHTML ="(-)" + tds_cut;
        final_salery = (emp_salery -tds_cut - leave_cut)+ emp_bonus;
            document.getElementById('r-bonus').innerHTML = emp_bonus;
            document.getElementById('r-final').innerHTML = final_salery;
            document.getElementById('r-eid').innerHTML = emp_id;

        

    }
    else if(emp_months=="April" || emp_months=="June" || emp_months=="September" || emp_months=="November" ){
        let emp_salery = parseInt (document.getElementById('e-salery').value);
        let emp_years = parseInt(document.getElementById('e-year').value);
        let emp_bonus = parseInt(document.getElementById('e-bonus').value);
        let emp_tds =parseInt (document.getElementById('e-tds').value);
        let emp_leaves = parseInt(document.getElementById('e-leave').value);
        ddtt = emp_salery /30;
        // document.getElementById('perday').innerHTML = ddtt;
        document.getElementById('r-month').innerHTML = emp_months;
        document.getElementById('r-year').innerHTML = emp_years;
        leave_cut = ddtt * emp_leaves;
        leave_cut = leave_cut.toFixed(2) ;
        document.getElementById('r-leaves').innerHTML = emp_leaves;
        document.getElementById('r-rupee').innerHTML = +  leave_cut + "(-)"; 
        let tds_cut = (emp_salery*emp_tds)/100;
        document.getElementById('r-etds').innerHTML = emp_tds + "%";
        document.getElementById('r-value').innerHTML ="(-)" + tds_cut;
        final_salery = (emp_salery -tds_cut - leave_cut)+ emp_bonus;
            document.getElementById('r-bonus').innerHTML = emp_bonus;
            document.getElementById('r-final').innerHTML = final_salery;
            document.getElementById('r-eid').innerHTML = emp_id;

    }
      else if(emp_months=="February" && (0== emp_years %4)&& (0 != emp_years %100)|| (0== emp_years %400)) {
        let emp_salery = parseInt (document.getElementById('e-salery').value);
        let emp_years = parseInt(document.getElementById('e-year').value);
        let emp_bonus = parseInt(document.getElementById('e-bonus').value);
        let emp_tds =parseInt (document.getElementById('e-tds').value);
        let emp_leaves = parseInt(document.getElementById('e-leave').value);
            feb = emp_salery/29;
            
        // document.getElementById('perday').innerHTML = feb;
        document.getElementById('r-month').innerHTML = emp_months;
        document.getElementById('r-year').innerHTML = emp_years;
        leave_cut = feb * emp_leaves;
        leave_cut = leave_cut.toFixed(2) ;
        document.getElementById('r-leaves').innerHTML = emp_leaves;
        document.getElementById('r-rupee').innerHTML = +  leave_cut + "(-)"; 
        let tds_cut = (emp_salery*emp_tds)/100;
        document.getElementById('r-etds').innerHTML = emp_tds + "%";
        document.getElementById('r-value').innerHTML ="(-)" + tds_cut;
        final_salery = (emp_salery -tds_cut - leave_cut)+ emp_bonus;
            document.getElementById('r-bonus').innerHTML = emp_bonus;
            document.getElementById('r-final').innerHTML = final_salery;
            document.getElementById('r-eid').innerHTML = emp_id;
        }

        else{
            let emp_salery = parseInt (document.getElementById('e-salery').value);
            let emp_years = parseInt(document.getElementById('e-year').value);
            let emp_bonus = parseInt(document.getElementById('e-bonus').value);
            let emp_tds =parseInt (document.getElementById('e-tds').value);
            let emp_leaves = parseInt(document.getElementById('e-leave').value);
            feb = emp_salery/28;
        // document.getElementById('perday').innerHTML = feb;
        document.getElementById('r-month').innerHTML = emp_months;
        document.getElementById('r-year').innerHTML = emp_years;
        leave_cut = feb * emp_leaves;
        leave_cut = leave_cut.toFixed(2) ;
        document.getElementById('r-leaves').innerHTML = emp_leaves;
        document.getElementById('r-rupee').innerHTML =  leave_cut + "(-)"; 
        let tds_cut = (emp_salery*emp_tds)/100;
        document.getElementById('r-etds').innerHTML = emp_tds + "%";
        document.getElementById('r-value').innerHTML ="(-)" + tds_cut;
        final_salery = (emp_salery -tds_cut - leave_cut)+ emp_bonus;
            document.getElementById('r-bonus').innerHTML = emp_bonus;
            document.getElementById('r-final').innerHTML = final_salery;
            document.getElementById('r-eid').innerHTML = emp_id;
        }
        // if(emp_bonus == ''){
        //     alert("Entering  bonus is mandatory  (The bonus can be 0 )")
        // }

        // else{
        //     final_salery = (emp_salery -tds_cut - leave_cut)+ emp_bonus;
        //     document.getElementById('r-bonus').innerHTML = emp_bonus;
        //     document.getElementById('r-final').innerHTML = final_salery;
        // }
        

    }

    
    
