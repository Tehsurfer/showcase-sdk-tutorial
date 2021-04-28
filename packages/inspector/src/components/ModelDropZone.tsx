import React, { Component } from "react";
import { WithStyles, withStyles } from '@material-ui/core/styles';
import Dropzone from 'react-dropzone';
// clear

const styles = () => ({
  root: {
    width: '200px',
    height: '60px',
    marginLeft: '10px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#9dbd9d',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    textAlign: 'center' as 'center', // type cant be string.
    alignItems: 'center',
  },
  text: {
    margin: '12px',
  }
});

interface Props extends WithStyles<typeof styles> {
  cb: (serialized: string) => void;
}

class ModelDropZoneImpl extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.onModelHandler = this.onModelHandler.bind(this);
  }

  private onModelHandler(acceptedFiles: File[]) {

    let url = URL.createObjectURL(acceptedFiles[0])
    console.log(url);
    this.props.cb(url as string);
  };

  render() {
    const classes = this.props.classes;
    return (
      <div>
      <Dropzone onDrop={this.onModelHandler}>
      {({getRootProps, getInputProps}) => (
        <section>
          <div className={classes.root} {...getRootProps()}>
            <input {...getInputProps()} />
            <p className={classes.text}>Import object files by dropping them here.</p>
          </div>
        </section>
      )}
      </Dropzone>
     </div>
      
    );
  }
}

export const ModelDropZone = withStyles(styles, { withTheme: true })(ModelDropZoneImpl);
