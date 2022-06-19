function getAdmins(mao) {
    let admins = [];
    for([Key, value] of map) {
        if(value === 'Admin'){
            admins.push(Key);
        }
    }
    return admins;  
}

const usuarios = new Map();

usuarios.set('luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('jorger', 'user');
usuarios.set('Gabriela', 'Admin');

console.log(getAdmins(usuarios));