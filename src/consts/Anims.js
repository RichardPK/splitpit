export default {
  fadeIn: (time) => {
    return `{
        animation: fadein ${time}s;
    }

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`;
  }
};
