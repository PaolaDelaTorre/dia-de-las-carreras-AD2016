function writeNewProduct(e,r,a,i){var t={nombre:e,precio:r,descripcion:a,imageUrl:i},c=firebase.database().ref().child("products").push().key,d={};return d["/products/"+c]=t,firebase.database().ref().update(d)}