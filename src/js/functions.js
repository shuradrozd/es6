const obj = {
    name: "alex",
    getName: function() {

        const getFullName = () => this.name + " Alexandrovich";
        return getFullName();
    }
};

console.log(obj.getName());