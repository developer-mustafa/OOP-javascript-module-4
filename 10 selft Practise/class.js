class Father{
  getName() {
    const a = 5;
    const b = 6;
    console.log(a+b);
  }
}

class Son extends Father{
 static getName() {
    const a = 5;
    const b = 6;
    console.log(a * b);
  }
  }

const son1 = new Son();
const father1 = new Father();

// son1.getName();
Son.getName()