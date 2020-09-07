import React from "react";
import ReactDOM from "react-dom";
import { Upload } from "@progress/kendo-react-upload";

class CustomListItemUI extends React.Component {
  render() {
    const { files } = this.props;

    return (
      <ul>
        {files.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    );
  }
}

class UploadF extends React.Component {
  render() {
    return (
      <div>
        <Upload
          batch={true}
          defaultFiles={[]}
          withCredentials={false}
          listItemUI={CustomListItemUI}
        />
      </div>
    );
  }
}

export default UploadF;
