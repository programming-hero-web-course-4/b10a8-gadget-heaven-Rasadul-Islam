import Swal from "sweetalert2";

const getStoredCardList = () => {
    const storedListStr = localStorage.getItem('card-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}
const addToStoredCardList = (id) => {
    const storedList = getStoredCardList();
    if (storedList.includes(id)) {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: 'Opps!',
            text: "This item already added in card",
            showConfirmButton: false,
            timer: 3000,
          });
    } else {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: 'Success!',
            text: "Successfully added in the Card",
            showConfirmButton: false,
            timer: 3000,
          });
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('card-list', storedListStr);
    }
}

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}
const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: 'Opps!',
            text: "This item already added in Wish List",
            showConfirmButton: false,
            timer: 3000,
          });
    } else {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: 'Success!',
            text: "Successfully added in the Wish List",
            showConfirmButton: false,
            timer: 3000,
          });
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
    }
}
const clearStoredCardList = () => {
    localStorage.removeItem("card-list");
};
const clearStoredWishList = () => {
    localStorage.removeItem("wish-list");
};
export { 
    addToStoredCardList,
    addToStoredWishList,
    getStoredCardList,
    getStoredWishList,
    clearStoredCardList,
    clearStoredWishList,
};