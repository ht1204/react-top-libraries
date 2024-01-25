import {
    useOpacityWithStateSpringExample,
    useOpacityWithSetSpringExample,
    useColorSpringExample,
    useMultipleColorsSpringExample,
    useCounterSpringExample,
 } from '../hooks';
import '../styles/styles-custom-hooks.css';

export function CustomHooksDemo() {
  const opacityWithStateSpringExample = useOpacityWithStateSpringExample();
  const opacityWithSetSpringExample = useOpacityWithSetSpringExample();
  const colorSpringExample = useColorSpringExample();
  const multipleColorsSpringExample = useMultipleColorsSpringExample(); 
  const counterSpringExample = useCounterSpringExample(); 

  return (
    <>
      <h2>React Spring Custom Hooks Demo</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Toggle</th>
          <th>Demo</th>
        </tr>
        <tr>
          <td>{opacityWithStateSpringExample.title}</td>
          <td>{opacityWithStateSpringExample.button}</td>
          <td>{opacityWithStateSpringExample.animation}</td>
        </tr>
        <tr>
          <td>{opacityWithSetSpringExample.title}</td>
          <td>{opacityWithSetSpringExample.button}</td>
          <td>{opacityWithSetSpringExample.animation}</td>
        </tr>
        <tr>
          <td>{colorSpringExample.title}</td>
          <td>{colorSpringExample.button}</td>
          <td>{colorSpringExample.animation}</td>
        </tr>
        <tr>
          <td>{multipleColorsSpringExample.title}</td>
          <td>{multipleColorsSpringExample.button}</td>
          <td>{multipleColorsSpringExample.animation}</td>
        </tr>
        <tr>
          <td>{counterSpringExample.title}</td>
          <td>{counterSpringExample.button}</td>
          <td>{counterSpringExample.animation}</td>
        </tr>
      </table>
    </>
  )
}

