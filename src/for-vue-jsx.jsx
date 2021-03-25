import './style.css'


export default function (icons = {}) {
  const SvgIcon = ({icon, width, height, color}) => {
    const vars = {
      '--width': width,
      '--height': height || width,
      '--color': color,
    }
    return <div className="svg-icon" style={vars} v-html={icons[icon]}/>
  }

  SvgIcon.props = {
    icon: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '10px',
    },
    height: {
      type: String,
    },
    color: {
      type: String,
      default: '#888',
    },
  }

  return SvgIcon
}
