/* eslint-disable react/prop-types */
import ReactQuill from 'react-quill';
import styles from "./styles.module.scss";
import 'react-quill/dist/quill.snow.css';

const Description = ({ description, setDescription }) => {
  return <ReactQuill className={styles.quill} theme="snow" value={description} onChange={setDescription} />;
}

export default Description;