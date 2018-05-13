import React, {Component, Fragment} from 'react';
import "./Gallery.css"

class GridItem {
    constructor(box, canPartition) {
        this.box = box;
        this.canPartition = canPartition;
    }
}

class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}


class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gridItems: null
        }
    }

    /** This JavaScript function always returns a
     * random number between min (included) and max (excluded) **/
    static randomInt(max) {
        let min = 0;
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /** This JavaScript function always returns a
     * random number between min (included) and max (excluded) **/
    static getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    componentDidMount() {
        //This is the final partitions so minimum required sizes
        let partitionsFinal = [[1, 1], [1, 2], [2, 1], [1, 4], [4, 2], [2, 4], [4, 1], [4, 4], [2, 2], [1, 3], [3, 1], [2, 3], [3, 2], [3, 3], [3, 4], [4, 3]];
        //Creates grid and then prints it out
        let numOfImages = 28;
        let height = 9;
        let width = Math.floor(window.innerWidth / 100);
        let difference = window.innerWidth - (width * 100);
        console.log("WIDTH IS " + width);
        if (width > 6) {
            let grid = Gallery.generateGrid(numOfImages, width, height, partitionsFinal);
            for (let i = 0; i < 10; i++) {
                let newGrid = Gallery.generateGrid(numOfImages, width, height, partitionsFinal);
                if (newGrid.length > grid.length) {
                    console.log("BETTER GRID");
                    grid = newGrid;
                }
            }
            // while(grid.length<numOfImages){
            //     height += 1;
            //     grid = Gallery.generateGrid(numOfImages, width, height, partitionsFinal);
            // }
            console.log("HEIGHT IS " + height);
            grid.sort((o1, o2) => {
                if (o1.box.y === o2.box.y) {
                    return o1.box.x - o2.box.x;
                } else {
                    return o1.box.y - o2.box.y;
                }
            });
            let nums = Array.apply(null, Array(numOfImages)).map(function (_, i) {
                return i;
            });
            nums.shuffle();
            let diff = grid.length - nums.length;
            if (diff > 0) {
                for (let i = 0; i < diff; i++) {
                    grid.pop();
                }
            }
            let gridItems = grid.map((item, index) =>
                <div className="item" onClick={this.handleClick}
                     style={{gridColumn: "span " + item.box.getWidth(), gridRow: "span " + item.box.getHeight()}}>
                    <img src={"/img/pritigood500px/" + (nums[index] + 1) + ".jpg"}/>
                    {item.box.getWidth() === 1 && item.box.getHeight() === 1 ?
                        <div className="item__overlay colorPink">
                            <button style={{fontSize: "15px"}}>View →</button>
                        </div>
                        : <div className="item__overlay colorPink">
                            <button>View →</button>
                        </div>}

                </div>
            );
            this.setState({gridItems: gridItems, difference: difference, sWidth: width});
        }
        else {
            difference = 10;
            let nums = Array.apply(null, Array(numOfImages)).map(function (_, i) {
                return i;
            });
            nums.shuffle();
            let gridItems = nums.map((item) =>
                <div className="item" onClick={this.handleClick} style={{padding: "10px"}}>
                    <img src={"/img/pritigood500px/" + (item + 1) + ".jpg"}/>
                </div>
            );
            this.setState({gridItems: gridItems, difference: difference, sWidth: width});
        }
    }

    /***
     * ALL MATH DONE IN INTEGERS
     * @param numOfImages is the amount of partitions needed
     * @param gridWidth is the number of col span of grid
     * @param gridHeight is the number of row span of grid
     * @param partitionsArray is the finalized block sizes that cant be divided anymore
     */
    static generateGrid(numOfImages, gridWidth, gridHeight, partitionsArray) {
        // Create grid with base element that spans the entire grid width and height
        let gridItems = [];
        let baseGrid = new Rectangle(0, 0, gridWidth, gridHeight);
        //If x is 1 that represents it can be partitioned 0 means cant be partitioned
        gridItems.push(new GridItem(baseGrid, true));
        //Update these two variables as you push partitions
        let partitions = 1;
        let availablePartitionBlocks = 1;
        //Figure our wat to do if grid is not splittable anymore but more images need to be pushed
        //Maybe call it recursively and return a 2d array each row containing the list of items

        //While you need to make more partitions and the available amount of blocks that are dividable are > 0
        while (partitions < numOfImages && availablePartitionBlocks > 0) { //
            //Filter partitionable blocks so x = 0 so when you choose a random element from the list its faster
            let listToChooseFrom = gridItems.filter(p => p.canPartition);
            if (listToChooseFrom.length === 0) { // If size of partitionable blocks is 0 break out of while loop maybe create blocks here that are remaining
                break;
            }
            //Randomly choose a block from the list to partition
            let index = Gallery.randomInt(listToChooseFrom.length);
            let indexInOriginal = gridItems.indexOf(listToChooseFrom[index]);
            let chosen = gridItems[indexInOriginal];
            if (chosen.canPartition) {
                let randomChoice = Gallery.randomInt(100);
                //Match height if > 50 else match width
                let height = chosen.box.getHeight();
                let width = chosen.box.getWidth();
                let part1 = null, part2 = null;

                if (height <= 4) {
                    randomChoice = 100;
                } else if (width <= 4) {
                    randomChoice = 0;
                }

                //I used to get random.nextInt return 0 which crashed so had to debug that
                //Match either the width or height dimension, subtract for left over part
                if (randomChoice > 50) {
                    height = chosen.box.getHeight();
                    width = Gallery.randomInt(chosen.box.getWidth() - 4) + 1;
                    part1 = new Rectangle(chosen.box.x, chosen.box.y, width, height);
                    part2 = new Rectangle(part1.x + part1.width, chosen.box.y, (chosen.box.getWidth() - width), height);
                } else {
                    height = Gallery.randomInt(chosen.box.getHeight() - 4) + 1;
                    width = chosen.box.getWidth();
                    part1 = new Rectangle(chosen.box.x, chosen.box.y, width, height);
                    part2 = new Rectangle(part1.x, part1.y + part1.height, width, (chosen.box.getHeight() - height));
                }
                //Start by assuming you can partition, then go through the final positions given like
                // 1x4, 4x4, 2x2 and check if thats what you have. If so set x = 0 so you dont divide anymore.
                let canPartition1 = true;
                let canPartition2 = true;
                for (let r = 0; r < partitionsArray.length; r++) {
                    let x1 = partitionsArray[r][0];
                    let y1 = partitionsArray[r][1];
                    if (part1.getWidth() === x1 && part1.getHeight() === y1) {
                        canPartition1 = false;
                    }
                    if (part2.getWidth() === x1 && part2.getHeight() === y1) {
                        canPartition2 = false;
                    }
                }
                //Update counter variables
                if (canPartition1 && canPartition2) {
                    availablePartitionBlocks++;
                } else if (!canPartition1 && !canPartition2) {
                    availablePartitionBlocks--;
                }
                //Remove old partition and push the new two partitions and increment counter
                gridItems.splice(indexInOriginal, 1);
                gridItems.splice(indexInOriginal, 0, new GridItem(part2, canPartition2));
                gridItems.splice(indexInOriginal, 0, new GridItem(part1, canPartition1));
                partitions++;
            }

        }

        //Go through array and fix items, change 8x1 into 4x1 change 5x2 into 2x2, 3x2 and so forth
        //Make it so the array has rows in multiples of width size modify last element of that row to match
        //Attempt to combine 1x1 into next block
        return gridItems;
    }

    handleClick = (e) => {
        const src = e.currentTarget.querySelector('img').src;
        console.log(this.overlay);
        this.overlay.querySelector('img').src = src;
        this.overlay.classList.add('open');
    };

    close = () => {
        this.overlay.classList.remove('open');
    };

    render() {

        return (
            <Fragment>
                {this.state.sWidth > 6 &&
                <div className="overlay" ref={(ref) => this.overlay = ref} onClick={this.close}>
                    <div className="overlay-inner">
                        {/*<button className="close" onClick={this.close}>× Close</button>*/}
                        <img/>
                    </div>
                </div>
                }
                <div className="Gallery-DIV">
                    <div className="spacer"
                         style={{height: "800px", width: (this.state.difference / 2) + "px", color: "red"}}/>
                    <section className="Gallery">
                        {this.state.gridItems !== null && this.state.gridItems}
                    </section>
                </div>

            </Fragment>
        );


    }
}

Array.prototype.shuffle = function () {
    var input = this;

    for (var i = input.length - 1; i >= 0; i--) {

        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

export default Gallery;
