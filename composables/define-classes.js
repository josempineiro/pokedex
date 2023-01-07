import { computed } from "vue";

const getClassString = ({ name, value, alias, separator = "_" }) => {
  const buildClass = (value) => {
    return `${alias}${separator}${value}`;
  };

  if (value) {
    switch (typeof value) {
      case "string":
      case "number":
        return buildClass(value);
      case "boolean":
        return buildClass(name);
      case "object":
        if (value instanceof Array) {
          return buildClass(value.join(separator));
        }
      default:
        return buildClass(value);
    }
  }
};

export default function (alias, props = {}) {
  return computed(() => [
    alias,
    ...Object.entries(props).reduce(
      (classes, [name, prop]) => [
        ...classes,
        ...(props[name]
          ? [
              getClassString({
                alias,
                name,
                value: props[name],
              }),
            ]
          : []),
      ],
      []
    ),
  ]);
}
