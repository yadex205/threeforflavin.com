type ClassnamesName = string | { [key: string]: undefined | boolean };

export default function classnames(...names: ClassnamesName[]): string {
  return names
    .map(name => {
      return typeof name === 'string'
        ? name
        : Object.keys(name)
            .filter(key => name[key])
            .join(' ');
    })
    .join(' ');
}
