export const getOptionsBySearch = (optionsAvailable, currentSearchValue) => {
  if ([...currentSearchValue].every(char => char === '*' || char === ' ')) {
    return optionsAvailable;
  }
  if (![...currentSearchValue].every(char => char === '*' || char === ' ')) {
    const regex = getRegExpBasedOnInput(currentSearchValue);
    if (regex === false) return false;
    return optionsAvailable.filter(option => {
      return option.label.match(regex);
    });
  }
  if (currentSearchValue !== '' && !currentSearchValue.includes('*')) {
    return optionsAvailable.filter(option =>
      option.label.toLowerCase().includes(currentSearchValue.toLowerCase())
    );
  }
  return optionsAvailable;
};

export const regExpWithoutAllCharacter = input => new RegExp(input, 'ig');
export const regExpWithSubstringsWithAllCharacter = string =>
  new RegExp(`${string}`, 'ig');
export const regExpWith2Substrings = (initialString, finalString) =>
  new RegExp(`${initialString}.*?${finalString}`, 'ig');

export const getRegExpBasedOnInput = input => {
  try {
    if (input.includes('*')) {
      const splitInput = input.split('*');
      const initialPartSearchValue = splitInput[0];
      const lastPartSearchValue = splitInput[1];

      if (
        initialPartSearchValue !== '' &&
        initialPartSearchValue !== undefined &&
        lastPartSearchValue === ''
      ) {
        return regExpWithSubstringsWithAllCharacter(initialPartSearchValue);
      }
      if (
        initialPartSearchValue === '' &&
        lastPartSearchValue !== '' &&
        lastPartSearchValue !== undefined
      ) {
        return regExpWithSubstringsWithAllCharacter(lastPartSearchValue);
      }
      if (
        initialPartSearchValue !== '' &&
        lastPartSearchValue !== '' &&
        initialPartSearchValue !== undefined &&
        lastPartSearchValue !== undefined
      ) {
        return regExpWith2Substrings(
          initialPartSearchValue,
          lastPartSearchValue
        );
      }
    }
    return regExpWithoutAllCharacter(input);
  } catch (e) {
    return false;
  }
};

export const findSubstringIndices = (string, regex) => {
  const matches = {};
  const match = regex.exec(string);
  if (match !== null) {
    Object.assign(matches, {
      start: match.index,
      end: regex.lastIndex - 1,
    });
  }
  return matches;
};

export const singleOptionFilter = (input, option) => {
  if (option.label) {
    return option.label.toLowerCase().includes(input.toLowerCase());
  }
  return false;
};

export const filterOption = (input, option) => {
  if ([...input].every(char => char === '*' || char === ' ')) {
    return true;
  }
  if (![...input].every(char => char === '*' || char === ' ')) {
    if (option.children.props.value) {
      const regex = getRegExpBasedOnInput(input);
      if (regex === false) return false;
      return option.children.props.value.match(regex);
    }
    return false;
  }
  if (input !== '' && !input.includes('*')) {
    if (option.children.props.value) {
      return option.children.props.value
        .toLowerCase()
        .includes(input.toLowerCase());
    }
    return false;
  }
  return false;
};
