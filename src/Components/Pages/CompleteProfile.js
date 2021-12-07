import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { API_BASE_URL } from '../../Config/Config';
import Loader from 'react-loader-spinner';
import Axios from 'axios';
import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { getCroppedImg } from './CanvasUtils';
import { styles } from './CropImageStyle';
import { toastrSuccess, toastrWarning } from '../../Services/ToasterService';

class CompleteProfile extends Component {

    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            loader: false,
            txtMobile: '',
            profileImage: '',
            txtUserid: '',
            image_upload: null,
            crop: { x: 0, y: 0 },
            zoom: 1,
            croppedAreaPixels: null,
            croppedImage: "./app-assets/img/sellerUser.svg",
            openCropArea: false
        }
    }

    componentDidMount() {
        Axios.post(API_BASE_URL + "api/check-user-in-profile/" + atob(this.props.match.params.user_id))
            .then(({ data }) => {
                if (data.status === "error") {
                    this.props.history.push({
                        pathname: '/info',
                        state: { message: data.message }
                    })
                }
            }).catch(err => console.log(err));
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    readFile = (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader()
            reader.addEventListener('load', () => resolve(reader.result), false)
            reader.readAsDataURL(file)
        });
    }

    onFileChange = async (e) => {
        //console.log('original', e.target.files[0]);

        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            let imageDataUrl = await this.readFile(file)
            this.setState({ profileImage: e.target.files[0], image_upload: imageDataUrl, openCropArea: true });
        }
    }

    showCroppedImage = async () => {
        try {
            const croppedImage = await getCroppedImg(
                this.state.image_upload,
                this.state.croppedAreaPixels
            );
            this.setState({ croppedImage: croppedImage, openCropArea: false });
        } catch (e) {
            console.error(e)
        }
    }

    onCropComplete = (c, croppedAreaPixels) => {
        this.setState({ croppedAreaPixels: croppedAreaPixels })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validator.allValid()) {
            const formData = new FormData(event.target);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            formData.append('profileImage', this.state.profileImage);
            formData.append('image_upload', this.state.croppedImage);
            this.setState({ loader: true });
            Axios.post(API_BASE_URL + "api/insert-profile", formData, config)
                .then(({ data }) => {
                    this.setState({ loader: false });
                    if (data.status === "success") {
                        toastrSuccess(data.message);
                        this.props.history.push({
                            pathname: '/info',
                            state: { message: "Congratulations! Your registration is completed.Now you can login from the below link.", isDisplayLogin: true }
                        })

                    } else {
                        toastrWarning(data.message);
                    }
                }).catch(err => console.log(err));

        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        const errorMsg = {
            color: 'red',
        }
        const { classes } = this.props;

        const loaderStyle = {
            background: "none repeat scroll 0 0 black",
            position: "fixed",
            opacity: "0.5",
            zIndex: "1000001",
            textAlign: "center",
            width: "100%",
            height: "100%",
            display: this.state.loader ? "block" : "none"
        }
        return (
            <React.Fragment>
                {this.state.openCropArea ? (
                    <React.Fragment>
                        <div className={classes.cropContainer}>
                            <Cropper
                                image={this.state.image_upload}
                                crop={this.state.crop}
                                rotation={this.state.rotation}
                                zoom={this.state.zoom}
                                aspect={4 / 3}
                                onCropChange={(e) => { this.setState({ crop: e }); }}
                                onRotationChange={(e) => { this.setState({ rotation: e }); }}
                                onZoomChange={(e) => { this.setState({ zoom: e }); }}
                                onCropComplete={this.onCropComplete}
                            />
                        </div>
                        <div className={classes.controls}>
                            <div className={classes.sliderContainer}>
                                <Typography
                                    variant="overline"
                                    classes={{ root: classes.sliderLabel }}
                                >
                                    Zoom
                                </Typography>
                                <Slider
                                    value={this.zoom}
                                    min={1}
                                    max={3}
                                    step={0.1}
                                    aria-labelledby="Zoom"
                                    classes={{ root: classes.slider }}
                                    onChange={(e, zoom) => this.setState({ zoom: zoom })}
                                />
                            </div>
                            <Button
                                onClick={this.showCroppedImage}
                                variant="contained"
                                color="primary"
                                classes={{ root: classes.cropButton }}
                            >
                                Show Result
                            </Button>
                        </div>

                    </React.Fragment>
                ) : (
                    <main className="wrapper m-0 p-0">
                        <div className="sec secLogin">
                            <div className="container">
                                <div style={loaderStyle}>
                                    <Loader type="TailSpin" color="#786efd" />
                                </div>
                                <form className="secForm" encType="multipart/form-data" method="POST" onSubmit={this.handleSubmit}>
                                    <h5 className="mt-0 mb-5">Complete Your Profile</h5>
                                    <div className="input-field customField">
                                        <label className="active">Upload Image</label>
                                        <div className="userProfile userProfileCircle mb-4">
                                            <div className="userProfileEdit">
                                                <img src="./app-assets/img/camera.svg" alt="" />
                                            </div>
                                            <input type='file' name="profileImage" onChange={this.onFileChange} accept="image/*" />

                                            <div style={errorMsg}>{this.validator.message('image_upload', this.state.image_upload, 'required')}</div>
                                            <img className="userProfileImg uploadImgs" src={this.state.croppedImage} alt="" />
                                        </div>
                                    </div>
                                    <input type="hidden" name="txtUserid" value={atob(this.props.match.params.user_id)} />
                                    <div className="input-field customField">
                                        <label className="active">Mobile No. <span className="required red-text">*</span></label>
                                        <input type="number" className="validate" name="txtMobile" onChange={this.handleInputChange} value={this.state.txtMobile} />
                                        <div style={errorMsg}>{this.validator.message('mobile number', this.state.txtMobile, 'required|')}</div>
                                    </div>
                                    <div className="center-align mt-2">
                                        <input className="btn black w-100" type="submit" value="Save" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </main>
                )}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(CompleteProfile)
