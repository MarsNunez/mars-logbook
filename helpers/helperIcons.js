import {
  BookOpenIcon,
  BugAntIcon,
  CameraIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

export default function helperIcons(type) {
  let icon;
  switch (type) {
    case "life":
      icon = <CameraIcon className="h-8" />;
      break;
    case "books":
      icon = <BookOpenIcon className="h-8" />;
      break;
    case "random":
      icon = <SparklesIcon className="h-8" />;
      break;
    default:
      icon = <BugAntIcon className="h-8" />;
  }

  return icon;
}
