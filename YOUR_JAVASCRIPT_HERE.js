//////////////Create Object//////////////////
/////////////////////////////////////////////
////////////////////////////////////////////////7

const hero = {

    name: "Superman",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2,
    }


};

////////////Placeholder///////////////////
//////////////////////////////////////////
///////////////////////////////////////////

const person = hero;
const weapon = hero.weapon;
const inventory = hero.inventory;



//////////////////Game Logic Functions ///////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


function rest(person) {

    person.health = 10;
    alert("You have full health")
    return person
};




function pickUpItem(person, weapon) {


    //Adds Weapon to last element of Array
    const inventory = person.inventory;
    inventory.push(weapon);

}

function equipWeapon(person) {

    if (person.inventory.length === 0)  {

    }

    else {

        person.weapon = person.inventory[0]
    }

}

///////////////Support Functions/////////////////
/////////////////////////////////////////////////
///////////////////////////////////////////////////

function restoreHealth() {
   
    hero.health = 10;
    alert("Your     Health restored to 10")
}

function clickDagger() {

    alert("Your Dagger is dragged into Inventory")
    weapon.type = "dagger"
    inventory.push(weapon);

}

function clickBag() {
    alert("Your Weapon has been equipped")
    equipWeapon(person);

}

/////////////Additionals I cant really test well///////////////////////
/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function insertName (){
    
    
    userName = document.getElementById("heroName")
    const newName = userName.value
    hero.name = newName;

    alert("Your name is"+ newName+"!"+ "Please enter the World" )
}


////////////Showfunctions////////////////////////
//////////////////////////////////////////////////
////////////////////////////////////////////////////



function showStats1 (){
    // alert("digga");


    // Get values of normal Object
    for( key in hero ){
        if(hero.hasOwnProperty(key)) {
            let value = hero[key];

 

    //create document
    const paragraph = document.createElement("p")
    const section = document.createElement("section")


    //add classlist
    section.classList.add("sec")

    //change content

    paragraph.innerHTML = key +" "+ value


    //merge elements
    section.appendChild(paragraph)

    console.log(section)

    //display data

   const containerToAppend = document.getElementById("parent");
    containerToAppend.appendChild(section) 


    setTimeout(function(){

        containerToAppend.removeChild(section)  
    
    },2000);
        }

    }}



    function showWeapon (){
     

            // Get values of normal Object
            for( key in weapon ){
                if(weapon.hasOwnProperty(key)) {
                    let weaponValue = weapon[key];

                    

            //create document
            const paragraph1 = document.createElement("p")
            const section1 = document.createElement("section")


            //add classlist
            section1.classList.add("sec")

            //change content

            paragraph1.innerHTML = weaponValue


            //merge elements
            section1.appendChild(paragraph1)


            //display data

            const containerToAppend = document.getElementById("parent1");
            containerToAppend.appendChild(section1) 

            //remove data after certain amount of time

            setTimeout(function(){

                containerToAppend.removeChild(section1)  
            
            },2000);

        }


    }

     }
    

     function showInventory (){

         
        for (let i = 0; i < inventory.length; i++) {
        

             let inventoryValue = inventory[i];


            console.log(inventory[i])



            //  for( let x = 0; x < inventory[i].length; x++){
            //      let element  = inventory[i][x];

            
             console.log()
            // create document
            const paragraph2 = document.createElement("p")
            const section2 = document.createElement("section")


            //add classlist
            section2.classList.add("sec")
            
            //change content
            
            
            paragraph2.innerHTML = inventoryValue

           // merge elements
            section2.appendChild(paragraph2)


           // display data

            const containerToAppend = document.getElementById("parent2");
            containerToAppend.appendChild(section2) 

            setTimeout(function(){

                containerToAppend.removeChild(section2)  
            
            },2000);

        }
    }    

            
               

 
