#!/bin/bash

# Скрипт оптимизации изображений для ZenCreator
# Создает версии для мобайл (300px) и десктоп (600px)

echo "🚀 Начинаем оптимизацию изображений..."

# Функция для оптимизации одного изображения
optimize_image() {
    local input_file="$1"
    local output_mobile="$2"
    local output_desktop="$3"
    
    echo "📱 Мобайл: $(basename "$input_file")"
    # Мобайл версия: ширина 300px, качество 85%
    sips -Z 300 --setProperty formatOptions 85 "$input_file" --out "$output_mobile" 2>/dev/null
    
    echo "💻 Десктоп: $(basename "$input_file")"
    # Десктоп версия: ширина 600px, качество 90%
    sips -Z 600 --setProperty formatOptions 90 "$input_file" --out "$output_desktop" 2>/dev/null
}

# Оптимизация изображений главной страницы
echo "🏠 Оптимизируем изображения главной страницы..."
for img in public/images/home/*.{png,jpg,jpeg,webp}; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        optimize_image "$img" "public/images/optimized/mobile/home/$filename" "public/images/optimized/desktop/home/$filename"
    fi
done

# Оптимизация изображений галереи carousel
echo "🎠 Оптимизируем изображения галереи..."
for img in public/images/zencreator/tools/carousel/*.{png,jpg,jpeg,webp}; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        optimize_image "$img" "public/images/optimized/mobile/zencreator/tools/carousel/$filename" "public/images/optimized/desktop/zencreator/tools/carousel/$filename"
    fi
done

# Оптимизация остальных инструментов
for tool in face-generation face-swap upscaling generation-prompt generation-reference; do
    echo "🛠️  Оптимизируем $tool..."
    for img in "public/images/zencreator/tools/$tool"/*.{png,jpg,jpeg,webp}; do
        if [ -f "$img" ]; then
            filename=$(basename "$img")
            optimize_image "$img" "public/images/optimized/mobile/zencreator/tools/$tool/$filename" "public/images/optimized/desktop/zencreator/tools/$tool/$filename"
        fi
    done
done

echo "✅ Оптимизация завершена!"
echo "📊 Статистика размеров:"

# Показываем размеры до и после
original_size=$(du -sh public/images/ | cut -f1)
mobile_size=$(du -sh public/images/optimized/mobile/ | cut -f1)
desktop_size=$(du -sh public/images/optimized/desktop/ | cut -f1)

echo "📁 Оригинальные: $original_size"
echo "📱 Мобайл: $mobile_size"
echo "💻 Десктоп: $desktop_size"
