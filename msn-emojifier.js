// Define the mapping of text to GIF filenames
const emojiMap = {
    ':airplane:': 'airplane.gif',
    ':angel_smile:': 'angel_smile.gif',
    ':angry:': 'angry.gif',
    ':angry_smile:': 'angry_smile.gif',
    ':ball:': 'ball.gif',
    ':bat:': 'bat.gif',
    ':beer_mug:': 'beer_mug.gif',
    ':bowl:': 'bowl.gif',
    ':broken_heart:': 'broken_heart.gif',
    ':cake:': 'cake.gif',
    ':camera:': 'camera.gif',
    ':car:': 'car.gif',
    ':cat:': 'cat.gif',
    ':clock:': 'clock.gif',
    ':coffee:': 'coffee.gif',
    ':computer:': 'computer.gif',
    ':confused:': 'confused.gif',
    ':confused_smile:': 'confused_smile.gif',
    ':cry_smile:': 'cry_smile.gif',
    ':devil_smile:': 'devil_smile.gif',
    ':dog:': 'dog.gif',
    ':envelope:': 'envelope.gif',
    ':escargot:': 'escargot.gif',
    ':eye_rolling:': 'eye-rolling.gif',
    ':film:': 'film.gif',
    ':girl:': 'girl.gif',
    ':girl_hug:': 'girl_hug.gif',
    ':glasses_happy:': 'glasses_happy.gif',
    ':gossip:': 'gossip.gif',
    ':guy:': 'guy.gif',
    ':guy_hug:': 'guy_hug.gif',
    ':heart:': 'heart.gif',
    ':idk:': 'idk.gif',
    ':island:': 'island.gif',
    ':kiss:': 'kiss.gif',
    ':lightbulb:': 'lightbulb.gif',
    ':lightning:': 'lightning.gif',
    ':martini:': 'martini.gif',
    ':messenger:': 'messenger.gif',
    ':mobile:': 'mobile.gif',
    ':money:': 'money.gif',
    ':moon:': 'moon.gif',
    ':note:': 'note.gif',
    ':omg_smile:': 'omg_smile.gif',
    ':party:': 'party.gif',
    ':phone:': 'phone.gif',
    ':pizza:': 'pizza.gif',
    ':plate:': 'plate.gif',
    ':present:': 'present.gif',
    ':rain:': 'rain.gif',
    ':red_smile:': 'red_smile.gif',
    ':regular_smile:': 'regular_smile.gif',
    ':rose:': 'rose.gif',
    ':sad_smile:': 'sad_smile.gif',
    ':shades_smile:': 'shades_smile.gif',
    ':sheep:': 'sheep.gif',
    ':shutup:': 'shutup.gif',
    ':sick:': 'sick.gif',
    ':sleepy:': 'sleepy.gif',
    ':star:': 'star.gif',
    ':teeth_smile:': 'teeth_smile.gif',
    ':thinking:': 'thinking.gif',
    ':thumbs_down:': 'thumbs_down.gif',
    ':thumbs_up:': 'thumbs_up.gif',
    ':tongue_smile:': 'tongue_smile.gif',
    ':umbrella:': 'umbrella.gif',
    ':what_smile:': 'what_smile.gif',
    ':wilted_rose:': 'wilted_rose.gif',
    ':wink_smile:': 'wink_smile.gif'
};

// Function to replace text with emoji images
function replaceTextWithEmoji() {
    const elements = document.querySelectorAll('p, span, div, a');

    elements.forEach(element => {
        let html = element.innerHTML;
        for (const [text, gif] of Object.entries(emojiMap)) {
            const regex = new RegExp(text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
            html = html.replace(regex, `<img src="/msn/${gif}" alt="${text}">`); // Directory Here!!!
        }
        element.innerHTML = html;
    });
}

// Call the function on page load
window.addEventListener('DOMContentLoaded', replaceTextWithEmoji);
