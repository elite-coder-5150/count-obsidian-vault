abstract class animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract makeSound(): void;
}

class dog extends animal {
    makeSound() {
        console.log(this.name + ' barks')
    }
}

class cat extends animal {
    makeSound() {
        console.log(this.name + ' meows')
    }
}

const _dog = new dog('fido');
_dog.makeSound();

const _cat = new cat('whiskers')
