import '../../styles/drum-game-round.css'

export class Round {
    constructor(level,task) {
        this.level = level;
        this.task = task;
        this.array = []
    }
    // метод который будет отрисовывать поле
    createDrumFiled () {
        const body = document.querySelector('body')
        const div = document.createElement('div')   
        div.classList = 'container'
        body.append(div)

        const h1 = document.createElement('h1')   
        h1.classList = 'header'
        h1.textContent = `${this.level}`
        div.append(h1)
        
        const drumImg = document.createElement('img')
        drumImg.classList = 'drumsImg'
        drumImg.src = 'https://cdn-icons-png.flaticon.com/512/4310/4310857.png'
        div.append(drumImg)

        const task = document.createElement('div')
        task.classList = 'task'
        task.textContent = `Сыграй: ${this.task}`
        div.append(task)

        const help = document.createElement('img')
        help.classList = 'help'
        help.src = '../../img/drum_game_info.jpg'
        div.append(help)

        const containerDrum = document.createElement('div')
        containerDrum.classList = 'drums'
        div.append(containerDrum)

        const innerContainer = document.querySelector('.drums')
        innerContainer.innerHTML = ` 
            <div data-d="k" class="kick"></div>
            <div data-d="s" class="snare"></div>
            <div data-d="h" class="hi-hat"></div>
            <div data-d="v" class="tom1"></div>
            <div data-d="b" class="tom2"></div>
            <div data-d="n" class="tom3"></div>
            <div data-d="c" class="crash"></div>
        `

        const audio1 = document.createElement('audio')
        audio1.dataset.a = 'k'
        audio1.src = "https://res.cloudinary.com/dspfsamgq/video/upload/v1587707379/Drums/kick_kzxfhd.mp3"
        div.append(audio1)

        const audio2 = document.createElement('audio')
        audio2.dataset.a = 's'
        audio2.src = "https://res.cloudinary.com/dspfsamgq/video/upload/v1587707379/Drums/snare_kevw4t.mp3"
        div.append(audio2)

        const audio3 = document.createElement('audio')
        audio3.dataset.a = 'h'
        audio3.src = "https://res.cloudinary.com/dspfsamgq/video/upload/v1587707379/Drums/hi-hat_q1jbgc.mp3"
        div.append(audio3)

        const audio4 = document.createElement('audio')
        audio4.dataset.a = 'v'
        audio4.src = "https://res.cloudinary.com/dspfsamgq/video/upload/v1587707379/Drums/tom1_cqo1b5.mp3"
        div.append(audio4)

        const audio5 = document.createElement('audio')
        audio5.dataset.a = 'b'
        audio5.src = "https://res.cloudinary.com/dspfsamgq/video/upload/v1587707379/Drums/tom2_zqf4wh.mp3"
        div.append(audio5)

        const audio6 = document.createElement('audio')
        audio6.dataset.a = 'n'
        audio6.src = "https://res.cloudinary.com/dspfsamgq/video/upload/v1587707379/Drums/tom3_jyz3vy.mp3"
        div.append(audio6)

        const audio7 = document.createElement('audio')
        audio7.dataset.a = 'c'
        audio7.src = "https://res.cloudinary.com/dspfsamgq/video/upload/v1587707379/Drums/crash_q3in9r.mp3"
        div.append(audio7)

    }
    // метод для генерирования звуков при нажатии на клавиши
    game () {
            const body = document.querySelector('body')
            document.body.style.background = 'rgb(117, 118, 74)';

            body.addEventListener('keydown', event => {
                const { target } = event;
                let key = event.key;
                let drum = document.querySelector('[data-d='+key+']');
                let audio = document.querySelector('[data-a='+key+']');
                drum.classList.add('hit');
                setTimeout(()=>{
                drum.classList.remove('hit');
                },100);
            audio.currentTime = 0;
            audio.play();
            
            checkResult (this.array, event)
            
        });
    }
} 

function checkResult (arrayWithNotes, eventOur) {
    let array = arrayWithNotes
    array.push(eventOur.key)

    if (array[0] == 'v' || array[0] == 'V') {
        if (array[1] == 'k' || array[0] == 'K') {
            if (array[2] == 'v' || array[0] == 'V') {
                if (array[3] == 's' || array[0] == 'S') {
                    if (array[4] == 'k' || array[0] == 'K') {
                        if (array[5] == 'h' || array[0] == 'H') {
                            if (array[6] == 's' || array[0] == 'S') {
                                if (array[7] == 'h' || array[0] == 'H') {
                                    if (array[8] == 'k' || array[0] == 'K') {
                                        alert('Здорово получилось! ')
                                        array.splice(8,8)
                                    }
                                } else {
                                    array.splice(7,8)
                                }
                            } else {
                                array.splice(6,8)
                            }
                        } else {
                            array.splice(5,8)
                        }
                    } else {
                        array.splice(4,8)
                    }
                } else {
                    array.splice(3,8)
                }
            } else {
                array.splice(2,8)
            }
        } else {
            array.splice(1,8) 
        }
    } else {
        array.splice(0,8)
    }

    if (array.length > 8) {
        array.splice(0,8)
    }


    // if (array[0] == 'v') {
    //     if (array[1] == 'k') {
    //         if (array[2] == 'v') {
    //             if (array[3] == 's') {
    //                 alert('win')
    //                 // createModalWindowWinner ()
    //             } else {
    //                 array.splice(3,4)
    //             }
    //         } else {
    //             array.splice(2,4)
    //         }
    //     } else {
    //         array.splice(1,4) 
    //     }
    // } else {
    //     array.splice(0,4)
    // }

    // if (array.length > 3) {
    //     array.splice(0,4)
    // }
}

// function createModalWindowWinner () {
//     const container = document.querySelector('.container')

//     const div = document.createElement('div')
//     div.classList = 'modal'
//     container.append(div)
// }