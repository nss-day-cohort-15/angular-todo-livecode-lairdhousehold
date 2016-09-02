"use strict";

app.factory("ItemStorage", ($q, $http, FirebaseURL) => {

    let getItemList = function(){
        let items = [];
        //This is the Angular way of doing promises
        return $q((resolve, reject)=>{
          $http.get(`${FirebaseURL}/items.json`)
          //Angular does the parsing of the object for you, just like AJAX or getJSON
          .success((itemObject)=>{
            if (itemObject !== null){
              Object.keys(itemObject).forEach((key)=>{
                itemObject[key].id = key;
                items.push(itemObject[key]);
              });
              resolve(items);
            }
          })
          .error((error)=>{
            reject(error);
          });
        });
    };

    let postNewItem = (newItem) =>{
        return $q((resolve, reject)=>{
            $http.post(`${FirebaseURL}/items.json`,
            JSON.stringify(newItem))
            .success((objFromFirebase) => {
                console.log(objFromFirebase)
                resolve(objFromFirebase);
            })
            .error((error) =>{
                reject(error)
            });
        });
    };

    let deleteItem = (itemId) => {
        return $q((resolve, reject) =>{
            $http.delete(`${FirebaseURL}/items/${itemId}.json`)
              .success((objFromFirebase) => {
                resolve(objFromFirebase);
              });

        });
    };
    return {getItemList, postNewItem, deleteItem};
});
