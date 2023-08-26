import React, { useState } from "react";
import { Text } from "@chakra-ui/react";

const TruncatedText = ({ text, maxLength }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const truncatedText = isExpanded
      ? text
      : text.length > maxLength
      ? text.slice(0, maxLength) + "..."
      : text;
  
    const handleClick = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <Text fontSize="16px" textAlign="left" onClick={handleClick}>
        {truncatedText}
      </Text>
    )
}

export default TruncatedText
