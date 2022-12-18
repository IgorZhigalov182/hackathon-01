import '../../styles/drum-game-round.css'

export class Round {
    constructor(level,task) {
        this.level = level;
        this.task = task;
        this.array = []
    }
    createDrumFiled () {
        const body = document.querySelector('body')
        const div = document.createElement('div')   
        div.classList = 'game'
        body.append(div)

        const innerContainerDrum = document.createElement('div')
        innerContainerDrum.classList = 'game-drum'
        div.append(innerContainerDrum)

        const h1 = document.createElement('h1')   
        h1.classList = 'header-d'
        h1.textContent = `${this.level}`
        innerContainerDrum.append(h1)
        
        const drumImg = document.createElement('img')
        drumImg.classList = 'drumsImg'
        drumImg.src = 'https://cdn-icons-png.flaticon.com/512/4310/4310857.png'
        innerContainerDrum.append(drumImg)

        const task = document.createElement('div')
        task.classList = 'task'
        task.textContent = `Сыграй: ${this.task}`
        innerContainerDrum.append(task)

        const help = document.createElement('img')
        help.classList = 'help'
        help.src = '../img/drum_game_info.jpg'
        innerContainerDrum.append(help)

        const containerDrum = document.createElement('div')
        containerDrum.classList = 'drums'
        innerContainerDrum.append(containerDrum)

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
        innerContainerDrum.append(audio1)

        const audio2 = document.createElement('audio')
        audio2.dataset.a = 's'
        audio2.src = "https://res.cloudinary.com/dspfsamgq/video/upload/v1587707379/Drums/snare_kevw4t.mp3"
        innerContainerDrum.append(audio2)

        const audio3 = document.createElement('audio')
        audio3.dataset.a = 'h'
        audio3.src = "https://res.cloudinary.com/dspfsamgq/video/upload/v1587707379/Drums/hi-hat_q1jbgc.mp3"
        innerContainerDrum.append(audio3)

        const audio4 = document.createElement('audio')
        audio4.dataset.a = 'v'
        audio4.src = "https://res.cloudinary.com/dspfsamgq/video/upload/v1587707379/Drums/tom1_cqo1b5.mp3"
        innerContainerDrum.append(audio4)

        const audio5 = document.createElement('audio')
        audio5.dataset.a = 'b'
        audio5.src = "https://res.cloudinary.com/dspfsamgq/video/upload/v1587707379/Drums/tom2_zqf4wh.mp3"
        innerContainerDrum.append(audio5)

        const audio6 = document.createElement('audio')
        audio6.dataset.a = 'n'
        audio6.src = "https://res.cloudinary.com/dspfsamgq/video/upload/v1587707379/Drums/tom3_jyz3vy.mp3"
        innerContainerDrum.append(audio6)

        const audio7 = document.createElement('audio')
        audio7.dataset.a = 'c'
        audio7.src = "https://res.cloudinary.com/dspfsamgq/video/upload/v1587707379/Drums/crash_q3in9r.mp3"
        innerContainerDrum.append(audio7)

    }
    game () {
            const body = document.querySelector('body')
            document.body.style.background = 'rgb(117, 118, 74)';

            body.addEventListener('keydown', event => {
                const { target } = event;
                let key = event.key;
                let drum = document.querySelector('[data-d='+key+']');
                let audio = document.querySelector('[data-a='+key+']');
                if (drum) {
                    drum.classList.add('hit');
                }
                setTimeout(()=>{
                    if (drum) {
                        drum.classList.remove('hit');
                    }

                },100);

                if (audio) {
                    audio.currentTime = 0;
                    audio.play();
                }
            
            checkResult (this.array, event)
        });
    }    
} 

function checkResult (arrayWithNotes, eventOur) {
    let array = arrayWithNotes
    array.push(eventOur.key)

    let letters = ['v', 'k', 'v', 's', 'k', 'h', 's', 'h', 'k']

    letters.forEach((item) => {
        if (eventOur.key !== item) {
            return
        }
    })

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
                        localStorage.setItem('DrumGame', true)
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
}