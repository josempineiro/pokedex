import { computed, defineProps } from "vue";

const getClassString = ({
  name,
  type,
  value,
  alias,
  separator = "_",
  class: clazz,
}) => {
  const buildClass = (value) => {
    return `${alias}${separator}${
      clazz.useName ? `${name}${separator}` : ""
    }${value}`;
  };

  if (value) {
    switch (type) {
      case Array:
        return buildClass(value.join(separator));
      case String:
      case Number:
        return buildClass(value);
      case Boolean:
        return buildClass(name);
      default:
        return buildClass(value);
    }
  }
};

export default function (alias, options) {
  const props = defineProps(options);
  if (!props) {
    return [props, [alias]];
  }
  const classes = computed(() => [
    alias,
    ...Object.entries(options).reduce(
      (classes, [name, prop]) => [
        ...classes,
        ...(prop.class && props[name]
          ? [
              getClassString({
                name,
                alias,
                type: prop.type,
                class: prop.class,
                value: props[name],
              }),
            ]
          : []),
      ],
      []
    ),
  ]);
  return [props, classes];
}
