class CannonBall {
  constructor(x, y) {
    var options = {
      //Coloque a variável que determina o quanto o objeto ficará quicando
      ???: 0.8,
      //Coloque a variável que determina o atrito entre os objetos
      ???: 1.0,
      //Coloque a variável que determina o peso do objeto
      ???: 1.0,
      //Deixe o seu objeto como estático
      ???
    };

    //'this.r ' está  determinando o raio do objeto, ou seja, seu tamamho. Quanto maior for esse número...
    //...maior será sua bola de canhão
    this.r = ???;
    //'this.body ' está se referindo ao corpo que você está criando, utilize 'Bodies.circle' para criar um círculo
    this.body = ???(x, y, this.r, options);

    //Coloque o código que carrega uma imagem e além disso, coloque a imagem'cannonball.png'
    this.image = ???
    //Adicione o código que coloca o 'this.body' no mundo
    ????
  }

  //shoot significa atirar, então na linha abaixo, você está criando a função atirar.
  //Adicione o código 'var velocity = p5.Vector.fromAngle(cannon.angle);' para adicionar velocidade na sua bola de canhão de acordo com o ângulo do canh~~ao
  shoot() {
    ???
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();

   
  }
}
