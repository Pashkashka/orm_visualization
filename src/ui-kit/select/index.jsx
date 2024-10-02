import styles from "./styles.module.css";
import { ReactComponent as ArrovIcon } from "../../assets/icons/arrov.svg";
import { useEffect, useState } from "react";
import Search from "antd/es/transfer/search";
import SearchInput from "../searchInput";
import Divider from "../divider";
import Button from "../button";
import { ReactComponent as CheckIcon } from "../../assets/icons/Check.svg";

function Select({
  data,
  placeholder,
  onSelectChange,
  size,
  options,
  optionsRadio,
  search,
  required,
  title,
  color
}) {
  const [inputValue, setInputValue] = useState(data);
  const [selectOpen, setSelectOpen] = useState(false);
  const [inputSize, setInputSize] = useState("32px");
  const [inputStyle, setInputStyle] = useState("selectInputPlaceholder");
  const [inputDataStyle, setInputDataStyle] = useState("selectInputData");
  const [inputColor, setInputColor]=useState("#ffffff")


  useEffect(() => {
    if (size && size === "small") {
      setInputSize("24px");
    }
    if(color && color==="grey"){
      setInputColor("#f8f8fa")
    }
  }, [size, color]);

  const handleSelectOpen = () => {
    setSelectOpen(!selectOpen);
  };

  useEffect(() => {
    if (selectOpen === true) {
      setInputStyle("selectInputPlaceholderActive");
      setInputDataStyle("selectInputDataActive");
    } else {
      setInputStyle("selectInputPlaceholder");
      setInputDataStyle("selectInputData");
    }
  }, [selectOpen]);

  const [searchValue, setSearchValue] = useState("");

  const [optionItems, setOptionItems] = useState();
  const [filteredItems, setFilteredItems] = useState();
  const [optionValue, setOptionValue]=useState(null);
  const handleSearch = (searchTerm) => {
    // const filtered = tableSettings.filter((item) =>
    //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    // setFilteredItems(filtered);
    // setSearchValue(searchTerm);
  };

  useEffect(() => {
    options.forEach(item=> {
      if(item.value===data){
        setInputValue(item.title);
        setOptionValue(item.value)
      }
    });
  }, [data]);
   const handleSelectChange=(value)=>{
    if(value===optionValue){
      onSelectChange(null);
      setSelectOpen(false)
      return;
    }
    onSelectChange(value);
    setSelectOpen(false)
   }

  return (
    <div className={styles.select}>
      <span className={styles.title}>
        {title}
        {required && <span style={{ color: "red" }}>*</span>}
      </span>
      <div className={styles.selectcontaner} style={{ height: inputSize}}>
        <div
          className={data ? styles[inputDataStyle] : styles[inputStyle]}
          style={{ backgroundColor: inputColor }}
          onClick={handleSelectOpen}
        >
          <span className={data ? styles.data : styles.placeholder}>
            {inputValue || placeholder}
          </span>
          <ArrovIcon className={selectOpen ? styles.arrov : styles.arrovClose} />
        </div>
        {selectOpen && options && (
          <div className={styles.optionItems} style={{top: inputSize}}>
            {options.map((item, index) => (
              <div className={styles.optionItem} style={{ height: inputSize }} onClick={()=>handleSelectChange(item.value)}>
                <span>{item.title}</span>
                {item.value === data && <CheckIcon />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Select;
