#! /bin/sh
files=(`find . -type f -name '*.gif' | sort -u`)
for arrItem in ${files[@]}
do
    filename=$(basename -- "$arrItem")
    filename="${filename%.*}"
    echo $filename

    `ffmpeg -i $filename.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" $filename.mp4`
done
