const Avatar = ({src, dim=50, alt, variant='circ'}) => {
    const avatarStyle = {
        objectFit: 'cover',
        height: dim+'px',
        width: dim+'px',
    };
    avatarStyle.borderRadius = (variant === 'circ' ? '50%' : null);
    
    return (
        <img alt={alt} style={avatarStyle} src={src} />
    )
};