//your JS code here. If required.
 const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    // Function to sort articles while ignoring specified words
    function sortArticles() {
        const sortedBands = bands.sort((a, b) => {
            return removeCommonWords(a) > removeCommonWords(b) ? 1 : -1;
        });

        const bandList = document.getElementById('band');

        // Clear previous list items
        bandList.innerHTML = '';

        // Populate the sorted list
        sortedBands.forEach(band => {
            const listItem = document.createElement('li');
            listItem.textContent = band;
            bandList.appendChild(listItem);
        });
    }

    // Function to remove common words from the beginning of a string
    function removeCommonWords(str) {
        const commonWords = ['a', 'an', 'the'];
        const words = str.split(' ');

        while (commonWords.includes(words[0].toLowerCase())) {
            words.shift();
        }

        return words.join(' ');
    }

    // Initial sorting when the page loads
    sortArticles();
