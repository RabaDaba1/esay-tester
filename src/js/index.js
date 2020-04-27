/* CSS */
import '../css/style.css'; 
/* JS */
import Text from './models/Text';
import { elements } from './views/base';
import * as textView from './views/textView';
import * as visualizationView from './views/visualizationView';


/** Global state of the app
 * - Text object
 */
const state = {}


/**
 * TEXT CONTROLLER
*/
const controlText = () => {
    // 1) Get input
    const input = textView.getInput();

    if (input) {
        // 2) Add text object to the state
        state.text = new Text(input);
        
        // 3) Prepare UI for data
        textView.clearList();
        textView.resetRepeatedWordsCount();

        // 4) Sort repeatedWords array according to importance
        state.text.sortRepeatedWordsArr();

        // 5) Display number of repeated words
        textView.displayRepeatedWordsCount(state.text.repeatedWords.length);

        // 6) Render text data
        textView.renderListItems(state.text.repeatedWords);
    }
}

elements.button.addEventListener('click', controlText);

/**
 * VISUALIZATION CONTROLLER
 */

const controlVisualization = item => {
    // 1) Get id
    const id = item.dataset.id;
    
    // 2) Prepare UI
    visualizationView.clearVisualizationText();
    textView.highlightSelected(item);

    // 3) Render visualization
    visualizationView.renderVisualization(state.text.text, state.text.repeatedWords[id]);
}

elements.wordList.addEventListener('click', e => {
    const item = e.target.closest('.data__item');
    if(item) {
        controlVisualization(item);
    }
});