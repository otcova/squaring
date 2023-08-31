export class Cub {
    
    top: string[];
    left: string[];
    front: string[];
    right: string[];
    back: string[];
    down: string[];

    constructor(parent?: Cub) {
        this.front = parent?.front ?? Array(9).fill("green");
        this.right = parent?.right ?? Array(9).fill("red");
        this.down = parent?.down ?? Array(9).fill("yellow");
        this.back = parent?.back ?? Array(9).fill("blue");
        this.top = parent?.top ?? Array(9).fill("white");
        this.left = parent?.left ?? Array(9).fill("orange");
    }

    
    scramble(algorithm: string) {
        let moves = algorithm.trim().split(" ");
        moves = moves.flatMap((move) => {
            if (move[1] == "2") return [move[0], move[0]];
            if (move[1] == "'") return [move[0], move[0], move[0]];
            return [move];
        });
        
        for (const move of moves) {
            if (move == "R") {
                rotateRightLeftLayer(this.front, this.top, this.back, this.down, [2, 5, 8]);
                rotateFace(this.right);
            } else if (move == "L") {
                rotateFace(this.left);
                rotateRightLeftLayer(this.front, this.down, this.back, this.top, [0, 3, 6]);
            } else if (move == "U") {
                rotateTopDownLayer(this.front, this.left, this.back, this.right, [0, 1, 2]);
                rotateFace(this.top);
            } else if (move == "D") {
                rotateTopDownLayer(this.front, this.right, this.back, this.left, [6, 7, 8]);
                rotateFace(this.down);
            } else if (move == "F") {
                rotateFrontLayer(this.top, this.right, this.down, this.left, [6, 7, 8]);
                rotateFace(this.front);
            } else if (move == "B") {
                rotateBackLayer(this.top, this.left, this.down, this.right, [0, 1, 2]);
                rotateFace(this.back);
            }
            else alert("error algorithm");
        }
    }
}

function rotateFace(base: string[]) {
    [base[0], base[2], base[6], base[8]] = [base[6], base[0], base[8], base[2]];
    [base[1], base[3], base[5], base[7]] = [base[3], base[7], base[1], base[5]];
}

function invertion(i: number) {
    switch (i) {
        case 2: return 6;
        case 5: return 3;
        case 8: return 0;

        case 0: return 8;
        case 3: return 5;
        case 6: return 2;
    }
    return i;
}

function rol(k: number, n: number) {
    for (let i = 0; i < n; ++i) {
        switch (k) {
            case 0: k = 2; break;
            case 1: k = 5; break;
            case 2: k = 8; break;
            case 3: k = 1; break;
            case 5: k = 7; break;
            case 6: k = 0; break;
            case 7: k = 3; break;
            case 8: k = 6; break;
        }
    }
    return k;
}

function rotateRightLeftLayer(a: string[], b: string[], c: string[], d: string[], n: number[]) {
    for (const i of n) {
        [a[i], b[i], c[invertion(i)], d[i]] = [d[i], a[i], b[i], c[invertion(i)]];
    }
}

function rotateTopDownLayer(a: string[], b: string[], c: string[], d: string[], n: number[]) {
    for (const i of n) {
        [a[i], b[i], c[i], d[i]] = [d[i], a[i], b[i], c[i]];
    }
}

function rotateFrontLayer(a: string[], b: string[], c: string[], d: string[], n: number[]) {
    for (const i of n) {
        [a[i], b[rol(i, 1)], c[rol(i, 2)], d[rol(i, 3)]] = [d[rol(i, 3)], a[i], b[rol(i, 1)], c[rol(i, 2)]];
    }
}

function rotateBackLayer(a: string[], b: string[], c: string[], d: string[], n: number[]) {
    for (const i of n) {
        [a[i], b[rol(i, 3)], c[rol(i, 2)], d[rol(i, 1)]] = [d[rol(i, 1)], a[i], b[rol(i, 3)], c[rol(i, 2)]];
    }
}