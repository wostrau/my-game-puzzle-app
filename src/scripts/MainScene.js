import * as PIXI from 'pixi.js';
import { Globals } from './Globals';
import { PuzzleGrid } from './PuzzleGrid';

export class MainScene {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
        this.createPuzzleGrid();
    }

    createBackground() {
        this.bgTexture = Globals.resources['bg'].texture;
        this.bg = new PIXI.Sprite(this.bgTexture);
        this.bg.width = window.innerWidth;
        this.bg.height = window.innerHeight;

        this.container.addChild(this.bg);
    }

    createPuzzleGrid() {
        const grid = new PuzzleGrid();
        this.container.addChild(grid.container);
    }
}