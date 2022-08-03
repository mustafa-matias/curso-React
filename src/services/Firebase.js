import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, query, where, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDiS9LFU4X42Zj-5q2e0uxbnG-mVoOd5nA",
    authDomain: "ecommercecursoreact.firebaseapp.com",
    projectId: "ecommercecursoreact",
    storageBucket: "ecommercecursoreact.appspot.com",
    messagingSenderId: "99762678752",
    appId: "1:99762678752:web:288a680f4e99ca64df9985"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getProductById = async (idProduct) => {
    return await getDoc(doc(db, "products", idProduct));
}

export const getProductsByCategory = async (idCategory) => {
    const ColeccionProductos = collection(db, "products");
    const q = query(ColeccionProductos, where("category", "==", idCategory));
    return await getDocs(q);
}

export const getAllProductos = async () => {
    const ColeccionProductos = collection(db, "products");
    const q = query(ColeccionProductos);
    return await getDocs(q);
}

export const getProducts = async (idCategory) => {
    if (idCategory) {
        return await getProductsByCategory(idCategory);
    } else {
        return await getAllProductos();
    }
}

export const sendOrder =(nameOrder, email, phone, productoAgregados, precioTotal)=>{
    const order = {
        buyer: {name: {nameOrder}, phone: {phone}, email: {email}},
        items: [{productoAgregados}],
        total: {precioTotal},
    };
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection,order).then(({id})=>console.log(id));
}

