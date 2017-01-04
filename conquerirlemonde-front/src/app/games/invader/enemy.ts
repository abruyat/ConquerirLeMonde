import {Drawable} from "./drawable";
import {Pool} from "./pool";
import {ImageRepository} from "./imageRepository";
/**
 * Create the Enemy ship object.
 */
export class Enemy extends Drawable {
  percentFire = .01;
  chance = 0;
  alive = false;
  collidableWith = "bullet";
  type = "enemy";
  speedX = 0;
  speedY;
  leftEdge;
  rightEdge;
  bottomEdge;
  context: any;
  imageRepository: ImageRepository;
  enemyBulletPool : Pool;

  constructor(imageRepository: ImageRepository, mainContext: any, bulletPool: Pool) {
    super(0, 0, 0, 0);
    this.imageRepository = imageRepository;
    this.context = mainContext;
    this.enemyBulletPool = bulletPool;
  }

  /*
   * Sets the Enemy values
   */
  spawn(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.speedX = 0;
    this.speedY = speed;
    this.alive = true;
    this.leftEdge = this.x - 90;
    this.rightEdge = this.x + 90;
    this.bottomEdge = this.y + 140;
  };

  /*
   * Move the enemy
   */
  draw() {
    this.context.clearRect(this.x - 1, this.y, this.width + 1, this.height);
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x <= this.leftEdge) {
      this.speedX = this.speed;
    }
    else if (this.x >= this.rightEdge + this.width) {
      this.speedX = -this.speed;
    }
    else if (this.y >= this.bottomEdge) {
      this.speed = 1.5;
      this.speedY = 0;
      this.y -= 5;
      this.speedX = -this.speed;
    }

    if (!this.isColliding) {
      this.context.drawImage(this.imageRepository.enemy, this.x, this.y);

      // Enemy has a chance to shoot every movement
      this.chance = Math.floor(Math.random() * 101);
      if (this.chance / 100 < this.percentFire) {
        this.fire();
      }

      return false;
    }
    else {
      return true;
    }
  };
  move() { }

  /*
   * Fires a bullet
   */
  fire() {
    this.enemyBulletPool.get(this.x + this.width / 2, this.y + this.height, -2.5);
  };

  /*
   * Resets the enemy values
   */
  clear() {
    this.x = 0;
    this.y = 0;
    this.speed = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.alive = false;
    this.isColliding = false;
  };
}
